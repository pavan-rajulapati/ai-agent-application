import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { CommandSelect } from "@/components/command-select";
import { GeneratedAvtar } from "@/components/generated-avathar";

import { useMeetingsFilters } from "@/modules/meetings/hooks/use-meetings-filters";

export const AgentIdFilters = () => {
    const [filters, setFilters] = useMeetingsFilters();
    const [agentSearch, setAgentSearch] = useState("")

    const trpc = useTRPC()

    const { data } = useQuery(
        trpc.agents.getMany.queryOptions({
            pageSize : 100,
            search : agentSearch,
        })
    )

    return (
        <CommandSelect
            className="h-9"
            placeholder="Agent"
            options={(data?.items ?? []).map((agent) => ({
            id : agent.id,
            value : agent.id,
            children : (
                <div className="flex items-center gap-x-2">
                    <GeneratedAvtar
                        seed={agent.name}
                        variant="botttsNeutral"
                        className="size-4"
                    />
                    {agent.name}
                </div>
            )
        }))}
        onSelect={(value) => setFilters({ agentId : value })}
        onSearch={setAgentSearch}
        value={filters.agentId ?? ""}
        />
    )
}