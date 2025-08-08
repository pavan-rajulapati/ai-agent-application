import { LogInIcon } from "lucide-react";
import {
    DefaultVideoPlaceholder,
    StreamVideoParticipant,
    ToggleAudioPreviewButton,
    ToggleVideoPreviewButton,
    useCallStateHooks,
    VideoPreview,
} from "@stream-io/video-react-sdk"
import "@stream-io/video-react-sdk/dist/css/styles.css"

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { generateAvatarUri } from "@/lib/avatar";

interface CallLobbyProps {
    onJoin : () => void;
}

const DisabledVideoPreview = () => {
    const { data } = authClient.useSession();

    return (
        <DefaultVideoPlaceholder
            participant={
                {
                    name: data?.user.name ?? "",
                    image:
                        data?.user.image ?? 
                        generateAvatarUri({
                            seed : data?.user.name ?? "",
                            variant : "initials"
                        })
                } as StreamVideoParticipant
            }
        />
    )
}

const AllowBrowserPermission = () => {
    return (
        <p className="text-sm">
            Please grant your browser a permission to access your camera and microphone.
        </p>
    )
}

export const CallLobby = ({ onJoin } : CallLobbyProps) => {
    const { useCameraState, useMicrophoneState } = useCallStateHooks();

    const { hasBrowserPermission : hasMicPermission } = useMicrophoneState()
    const {hasBrowserPermission : hasCameraPremission } = useCameraState()

    const hasBrowserMediaPermission = hasCameraPremission && hasMicPermission;

    return (
        <div className="flex flex-col items-center justify-center bg-radial from-sidebar-accent to-sidebar">
            <div className="py-4 px-8 flex flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
                    <div className="flex flex-col gap-y-2 text-center">
                        <h6 className="text-lg font-medium">Ready to join?</h6>
                        <p className="text-sm">Set up you call before joining</p>
                    </div>
                    <VideoPreview
                        DisabledVideoPreview={
                            hasBrowserMediaPermission ? DisabledVideoPreview : AllowBrowserPermission
                        }
                    />
                    <div className="flex gap-x-4">
                        <ToggleAudioPreviewButton/>
                        <ToggleVideoPreviewButton/>
                    </div>
                    <div className="flex gap-x-2 justify-between w-full">
                        <Button asChild variant="ghost">
                            <Link href="/meetings">
                                Cancel
                            </Link>
                        </Button>
                        <Button onClick={onJoin}>
                            <LogInIcon/>
                            Join Call
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};