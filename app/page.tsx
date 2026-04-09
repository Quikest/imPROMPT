"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2 text-xs tracking-widest uppercase">
        <span className="text-muted-foreground">
          &#9733; 創造的AIセッション &#9733;
        </span>
        <span className="text-muted-foreground">MODEL: IMPT-MX-006</span>
      </div>

      {/* Accent line */}
      <div
        className="w-full"
        style={{ height: 4, backgroundColor: "var(--chart-1)" }}
      />

      {/* Hero section */}
      <div className="relative flex flex-col items-center gap-2 px-6 py-10">
        <p
          className="text-xs tracking-[0.4em]"
          style={{ color: "var(--chart-1)" }}
        >
          イムプロンプト
        </p>
        <h1 className="text-center font-heading text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
          <span style={{ color: "var(--chart-1)" }}>im</span>
          <span className="text-primary">PROMPT</span>
        </h1>
        <p className="text-sm tracking-[0.3em] text-foreground">
          !! AI CREATIVE JAM !!
        </p>

        {/* Badge */}
        <div className="absolute top-6 right-6 rotate-12 bg-destructive px-3 py-2 text-center text-xs font-bold leading-tight text-foreground">
          <div>NEW!</div>
          <div>VOL.6</div>
        </div>
      </div>

      {/* Pink banner */}
      <div className="bg-primary py-4 text-center">
        <h2 className="text-3xl font-black tracking-[0.2em] text-primary-foreground sm:text-4xl">
          &#9655; MIXTAPE 6 &#9665;
        </h2>
      </div>

      {/* Hazard stripe */}
      <div
        className="w-full"
        style={{
          height: 12,
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--destructive) 0px, var(--destructive) 10px, var(--background) 10px, var(--background) 20px)",
        }}
      />

      {/* Middle section */}
      <div className="flex flex-col items-center gap-6 px-6 py-10">
        {/* Version badge */}
        <div
          className="px-6 py-3"
          style={{ border: "2px solid var(--destructive)" }}
        >
          <span
            className="text-sm tracking-[0.3em]"
            style={{ color: "var(--destructive)" }}
          >
            &lt;&lt; CLAUDE CODE VERSION &gt;&gt;
          </span>
        </div>

        {/* Dot divider */}
        <div className="flex gap-2">
          {[
            "var(--primary)",
            "var(--destructive)",
            "var(--chart-1)",
            "var(--primary)",
            "var(--chart-2)",
            "var(--chart-1)",
            "var(--destructive)",
            "var(--primary)",
            "var(--chart-3)",
            "var(--chart-1)",
            "var(--primary)",
          ].map((color, i) => (
            <div
              key={i}
              style={{ width: 8, height: 8, backgroundColor: color }}
            />
          ))}
        </div>

        {/* Date / Time heading */}
        <div className="flex w-full max-w-md items-center gap-2 text-xs">
          <span
            className="flex-1"
            style={{
              borderTop: "1px dashed var(--chart-1)",
            }}
          />
          <span
            className="tracking-[0.2em]"
            style={{ color: "var(--chart-1)" }}
          >
            &#9733; DATE / TIME &#9733;
          </span>
          <span
            className="flex-1"
            style={{
              borderTop: "1px dashed var(--chart-1)",
            }}
          />
        </div>

        {/* Date and time */}
        <div className="flex flex-col items-center gap-1 text-lg tracking-[0.2em] text-foreground sm:text-xl">
          <span>&#9655; WEDNESDAY &nbsp; 04.08 &#9665;</span>
          <span>&#9655; 7:00 PM &#9665;</span>
        </div>
      </div>

      {/* Venue section */}
      <div className="border-y border-border bg-card py-8 text-center">
        <h3 className="text-3xl font-black tracking-[0.3em] text-card-foreground sm:text-4xl md:text-5xl">
          CANOPY STUDIOS
        </h3>
      </div>

      {/* Hazard stripe */}
      <div
        className="w-full"
        style={{
          height: 12,
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--destructive) 0px, var(--destructive) 10px, var(--background) 10px, var(--background) 20px)",
        }}
      />

      {/* Info bar */}
      <div className="grid grid-cols-4 gap-px border-y border-border text-center text-xs">
        <div className="flex flex-col gap-1 px-3 py-3">
          <span className="text-muted-foreground">TYPE</span>
          <span className="font-bold tracking-wider text-foreground">
            CREATIVE
          </span>
        </div>
        <div className="flex flex-col gap-1 px-3 py-3">
          <span className="text-muted-foreground">LOCATION</span>
          <span className="font-bold tracking-wider text-foreground">
            AUSTIN TX
          </span>
        </div>
        <div className="flex flex-col gap-1 px-3 py-3">
          <span className="text-muted-foreground">SERIES</span>
          <span className="font-bold tracking-wider text-foreground">
            MX-006
          </span>
        </div>
        <div className="flex flex-col gap-1 px-3 py-3">
          <span className="text-muted-foreground">PWR</span>
          <span className="font-bold tracking-wider text-foreground">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
        </div>
      </div>

      {/* Accent line */}
      <div
        className="w-full"
        style={{ height: 4, backgroundColor: "var(--chart-1)" }}
      />

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs tracking-widest">
        <span className="text-muted-foreground">ミックステープ</span>
        <span className="font-bold text-foreground">imPROMPT.AI</span>
        <span className="text-muted-foreground">クリエイティブ</span>
      </div>

      {/* Theme toggle */}
      {mounted && (
        <div className="fixed bottom-4 right-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? "Light" : "Dark"}
          </Button>
        </div>
      )}
    </div>
  )
}
