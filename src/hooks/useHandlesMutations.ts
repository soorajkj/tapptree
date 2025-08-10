import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { z } from "zod/v3";
import type {
  archiveHandleSchema,
  createHandleSchema,
  reorderHandlesSchema,
  updateHandleSchema,
} from "@/utils/zod/handles";
import { rpc } from "@/lib/rpc";

type CreateHandleSchema = z.infer<typeof createHandleSchema>;
type ReorderHandlesSchema = z.infer<typeof reorderHandlesSchema>;
type UpdateHandleSchema = z.infer<typeof updateHandleSchema>;
type ArchiveHandleSchema = z.infer<typeof archiveHandleSchema>;

export const useHandlesMutations = () => {
  const queryClient = useQueryClient();

  const createHandleMutation = useMutation({
    mutationFn: async (json: CreateHandleSchema) => {
      const res = await rpc.api.me.handles.$post({ json });
      if (!res.ok) throw new Error("Failed to create post!");
      return await res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["handles"] }),
  });

  const reorderHandleMutation = useMutation({
    mutationFn: async (json: ReorderHandlesSchema) => {
      const res = await rpc.api.me.handles.reorder.$patch({ json });
      if (!res.ok) throw new Error("Failed to reorder links");
    },
    onMutate: async (newOrder) => {
      await queryClient.cancelQueries({ queryKey: ["handles"] });
      const previousHandles = queryClient.getQueryData<any[]>(["handles"]);

      if (previousHandles) {
        const newHandles = [...previousHandles].sort(
          (a, b) =>
            newOrder.platformIds.indexOf(a.platformId) -
            newOrder.platformIds.indexOf(b.platformId)
        );
        queryClient.setQueryData(["handles"], newHandles);
      }

      return { previousHandles };
    },
    onError: (err, newOrder, context) => {
      if (context?.previousHandles) {
        queryClient.setQueryData(["handles"], context.previousHandles);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["handles"] });
    },
  });

  const updateHandleMutation = useMutation({
    mutationFn: async ({
      id,
      json,
    }: {
      id: string;
      json: UpdateHandleSchema;
    }) => {
      const res = await rpc.api.me.handles[":id"].$patch({
        param: { id },
        json,
      });
      if (!res.ok) throw new Error("Failed to create post!");
      return await res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["handles"] }),
  });

  const archiveHandleMutation = useMutation({
    mutationFn: async ({
      id,
      json,
    }: {
      id: string;
      json: ArchiveHandleSchema;
    }) => {
      const res = await rpc.api.me.handles[":id"]["archive"].$patch({
        param: { id },
        json,
      });
      if (!res.ok) throw new Error("Failed to create post!");
      return await res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["handles"] }),
  });

  const deleteHandleMutation = useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await rpc.api.me.handles[":id"].$delete({ param: { id } });
      if (!res.ok) throw new Error("Failed to create post!");
      return await res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["handles"] }),
  });

  return {
    createHandleMutation,
    reorderHandleMutation,
    updateHandleMutation,
    archiveHandleMutation,
    deleteHandleMutation,
  };
};
