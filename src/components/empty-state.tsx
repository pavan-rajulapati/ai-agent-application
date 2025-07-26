
interface ErrorProps {
    title: string;
    description: string;
}

export const EmptyState = ({ title, description }: ErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
                <h6 className="text-lg font-medium">{title}</h6>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}