<script lang="ts">
    import { SvelteSet } from "svelte/reactivity";
    import { onMount } from "svelte";

    const text = "amsryq";

    let hoveredIndices = new SvelteSet<number>();
    let leavingIndices = new SvelteSet<number>();
    let isInitial = $state(true);

    const rotationAngles = text.split("").map(() => Math.random() * 20 - 10); // -10..+10

    function handleMouseEnter(index: number) {
        hoveredIndices.add(index);
        leavingIndices.delete(index);
    }

    function handleMouseLeave(index: number) {
        leavingIndices.add(index);
        setTimeout(() => {
            hoveredIndices.delete(index);
            leavingIndices.delete(index);
        }, 200);
    }

    let transforms = $derived.by(() => {
        const hovered = Array.from(hoveredIndices);
        const leaving = new Set(Array.from(leavingIndices));

        return text.split("").map((_, index) => {
            // if hovered or leaving -> lift + rotate
            if (hoveredIndices.has(index) || leaving.has(index)) {
                return `translateY(-0.5rem) rotate(${rotationAngles[index]}deg)`;
            }

            // adjacent letter shift logic
            let shift = 0;
            for (const hoveredIdx of hovered) {
                if (index === hoveredIdx - 1) shift -= 1;
                if (index === hoveredIdx + 1) shift += 1;
            }

            if (shift !== 0) {
                return `translateX(${shift * 0.25}rem)`;
            }

            return "";
        });
    });
</script>

<div class="text">
    {#each text as letter, index (index)}
        <span
            role="button"
            tabindex="0"
            class="letter"
            data-index={index}
            onmouseenter={() => handleMouseEnter(index)}
            onmouseleave={() => handleMouseLeave(index)}
            style="transform: {transforms[index]}; animation-delay: {index *
                0.05}s"
        >
            {letter}
        </span>
    {/each}
</div>

<style>
    .text {
        display: flex;
        font-size: 4rem;
        font-weight: bold;
        color: #222;
        gap: 0;
    }
    .letter {
        display: inline-block;
        cursor: default;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        line-height: 1;
        user-select: none;
        text-box-edge: cap alphabetic;
        text-box-trim: trim-start;
        animation: fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.5) translateY(-1rem);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
</style>
