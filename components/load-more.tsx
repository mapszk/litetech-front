import { Button } from "@/components/ui/button"

export function LoadMore() {
  return (
    <div className="flex justify-center py-8">
      <Button
        variant="outline"
        className="rounded-full border-border text-foreground hover:bg-secondary px-8 bg-transparent"
      >
        Load more
      </Button>
    </div>
  )
}
