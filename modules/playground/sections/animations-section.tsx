"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, PreviewBlock } from "../components/preview-block";
import { fadeIn, slideUp, scaleUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/common/components/ui";
import { Badge } from "@/common/components/ui";
import { RefreshCw } from "lucide-react";

function AnimationDemo({
  label,
  variants,
  hint,
}: {
  label: string;
  variants: typeof fadeIn;
  hint: string;
}) {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-xs">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full px-5 py-4 rounded-lg border border-primary-500/30 bg-primary-50 dark:bg-primary-100/10 text-sm font-medium text-primary-600 dark:text-primary-400 text-center"
        >
          {label}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setKey((k) => k + 1)}
          className="gap-1.5 text-xs"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Replay
        </Button>
        <code className="text-[11px] font-mono text-foreground/40">{hint}</code>
      </div>
    </div>
  );
}

export function AnimationsSection() {
  const [staggerKey, setStaggerKey] = useState(0);

  const ITEMS = ["First", "Second", "Third", "Fourth", "Fifth"];

  return (
    <section>
      <SectionHeader
        id="animations"
        title="Animations"
        description="Framer Motion animation presets from lib/animations.ts. Click Replay to re-trigger each animation."
      />

      <PreviewBlock
        title="fadeIn"
        description="Opacity fade — use for page transitions and modal overlays"
        className="justify-center"
        hint="fadeIn"
      >
        <AnimationDemo
          label="fadeIn animation"
          variants={fadeIn}
          hint="variants={fadeIn}"
        />
      </PreviewBlock>

      <PreviewBlock
        title="slideUp"
        description="Slide from below with fade — use for cards and list items"
        className="justify-center"
        hint="slideUp"
      >
        <AnimationDemo
          label="slideUp animation"
          variants={slideUp}
          hint="variants={slideUp}"
        />
      </PreviewBlock>

      <PreviewBlock
        title="scaleUp"
        description="Scale from 95% with fade — use for modals, popovers, and tooltips"
        className="justify-center"
        hint="scaleUp"
      >
        <AnimationDemo
          label="scaleUp animation"
          variants={scaleUp}
          hint="variants={scaleUp}"
        />
      </PreviewBlock>

      <PreviewBlock
        title="staggerContainer"
        description="Parent container that staggers children in sequence. Click Replay to restart."
        className="flex-col gap-3 items-stretch max-w-sm"
      >
        <motion.div
          key={staggerKey}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-2"
        >
          {ITEMS.map((item) => (
            <motion.div
              key={item}
              variants={slideUp}
              className="px-4 py-3 rounded-lg border border-card-border bg-card-bg text-sm font-medium text-foreground"
            >
              {item} item
            </motion.div>
          ))}
        </motion.div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStaggerKey((k) => k + 1)}
          className="gap-1.5 text-xs w-fit"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Replay Stagger
        </Button>
      </PreviewBlock>

      <PreviewBlock
        title="Hover & Tap Micro-interactions"
        description="Direct Framer Motion whileHover and whileTap props"
        className="gap-4 flex-wrap"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="px-5 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium cursor-pointer select-none shadow-md"
        >
          Hover or tap me
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="px-5 py-3 rounded-lg border-2 border-primary-500 text-primary-500 text-sm font-medium cursor-pointer select-none"
        >
          Hover scale only
        </motion.div>

        <motion.div
          whileHover={{ rotate: 5 }}
          whileTap={{ rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-12 w-12 rounded-lg bg-status-success/20 border border-status-success/40 flex items-center justify-center cursor-pointer select-none"
        >
          <span className="text-lg">🚀</span>
        </motion.div>
      </PreviewBlock>

      <PreviewBlock
        title="AnimatePresence — Toggle"
        description="Exit animations when component unmounts"
        className="flex-col items-center gap-4"
      >
        <TogglePresenceDemo />
      </PreviewBlock>
    </section>
  );
}

function TogglePresenceDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setVisible((v) => !v)}>
        {visible ? "Hide Element" : "Show Element"}
      </Button>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key="content"
            variants={scaleUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="px-6 py-4 rounded-lg border border-primary-500/30 bg-primary-50 dark:bg-primary-100/10 flex items-center gap-2"
          >
            <Badge variant="success">Visible</Badge>
            <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              This element animates in and out
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
