import React from "react";
import { Icon } from "@/components/core/icon";

interface PermaLinkProps {
  user: {
    id: string;
    username: string;
    name: string | null;
    avatarUrl: string | null;
    profile: {
      displayName: string;
      bio: string | null;
      contactEmail: string | null;
      phone: string | null;
      address: string | null;
      website: string | null;
    } | null;
  };
}

export default function PermaLink({ user }: PermaLinkProps) {
  const profile = user.profile;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <div className="size-16 overflow-clip rounded-full border-4 border-neutral-800">
          <img
            alt=""
            src={
              user.avatarUrl ||
              "https://framerusercontent.com/images/gjhvusBEsI9hRN7i1JYLAZIMuwc.png"
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1">
          <h1 className="font-archivo text-2xl leading-none font-medium text-white">
            {profile?.displayName || user.name || user.username}
          </h1>
          <Icon
            icon="BadgeCheck"
            className="fill-amber-500 stroke-neutral-900"
            width={24}
            height={24}
          />
        </div>
      </div>
      {profile && (
        <>
          {profile.bio && (
            <div className="flex items-center justify-center text-center">
              <p className="max-w-sm">{profile.bio}</p>
            </div>
          )}
          {(profile.website || profile.contactEmail || profile.phone) && (
            <div className="flex items-center justify-center gap-6">
              {profile.website && (
                <div className="flex items-center gap-1 leading-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="intentui-icons size-5"
                    data-slot="icon"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="1.5"
                      d="M12 21.25a9.25 9.25 0 0 0 0-18.5m0 18.5a9.25 9.25 0 0 1 0-18.5m0 18.5c-2.347 0-4.25-4.141-4.25-9.25S9.653 2.75 12 2.75m0 18.5c2.347 0 4.25-4.141 4.25-9.25S14.347 2.75 12 2.75M21 12H3"
                    />
                  </svg>
                  <p className="text-neutral-50">{profile.website}</p>
                </div>
              )}
              {profile.phone && (
                <div className="flex items-center gap-1 leading-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="intentui-icons size-5"
                    data-slot="icon"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.754 9.218a15.9 15.9 0 0 0 2.954 4.074 15.9 15.9 0 0 0 4.074 2.954l1.79-1.791a.5.5 0 0 1 .61-.076l3.517 2.098a.5.5 0 0 1 .097.782l-3.583 3.583a.97.97 0 0 1-.963.251 19.7 19.7 0 0 1-4.396-1.92 20 20 0 0 1-3.957-3.07 20 20 0 0 1-3.07-3.957 19.8 19.8 0 0 1-1.92-4.396.97.97 0 0 1 .25-.963l3.584-3.583a.5.5 0 0 1 .782.097l2.098 3.516a.5.5 0 0 1-.076.61z"
                    />
                  </svg>
                  <p className="text-neutral-50">{profile.phone}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
