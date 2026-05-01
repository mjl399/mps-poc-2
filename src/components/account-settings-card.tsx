import * as React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Composed instance synced from Figma node 149:2500.
// Imports the canonical Card primitives from @/components/ui/card.
//
// Component gap detected: there is no canonical Button component in this repo
// (no src/components/ui/button.tsx). The header action and the two footer
// buttons below are inline styled <button> elements as a fallback. Recommend
// running Developer Pull on the Figma Button component to create the canonical
// Button, then refactor this file to import it.

export function AccountSettingsCard() {
  return (
    <Card
      className="w-[348px]"
      data-figma-node-id="149:2500"
    >
      <CardHeader
        action={
          // Fallback inline button — replace with canonical <Button variant="ghost"> once it exists.
          <button
            type="button"
            className={cn(
              "inline-flex h-9 items-center justify-center gap-2 rounded-[8px] px-4 py-2",
              "text-sm font-medium leading-5 text-foreground"
            )}
          >
            Label
          </button>
        }
      >
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>

      <CardContent>
        <div
          className={cn(
            "flex h-[168px] w-full items-center justify-center",
            "rounded-[16px] border border-dashed border-border bg-background p-6"
          )}
        >
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="text-base font-normal leading-6 text-foreground">
              Place content here
            </p>
            <p className="text-base font-normal leading-6 text-muted-foreground">
              Opt + ⌘
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex w-full flex-col items-start gap-2">
          {/* Primary footer button — bg = var(--primary, #171717), text = #fafafa */}
          <button
            type="button"
            className={cn(
              "flex h-9 w-full items-center justify-center gap-2 rounded-[8px] px-4 py-2",
              "bg-primary text-sm font-medium leading-5 text-primary-foreground",
              "shadow-[0px_1px_1px_0px_rgba(26,26,26,0.05)]"
            )}
          >
            Label
          </button>

          {/*
            Secondary footer button — pink/destructive-focus.
            Figma token: custom/destructive-focus = rgba(220, 40, 40, 0.4) = #dc282866.
            Border: var(--input, #e6e6e6). Text: var(--foreground, #09090b).
            This is the button color update from the latest Figma sync.
          */}
          <button
            type="button"
            style={{ backgroundColor: "rgba(220, 40, 40, 0.4)" }}
            className={cn(
              "flex h-9 w-full items-center justify-center gap-2 rounded-[8px] px-4 py-2",
              "border border-input text-sm font-medium leading-5 text-foreground",
              "shadow-[0px_1px_1px_0px_rgba(26,26,26,0.05)]"
            )}
          >
            Label
          </button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AccountSettingsCard
