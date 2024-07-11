'use client'
import ActionButton from "./action-button"
import Counter from "./counter";

export default function SamplePage() {
    return (<main
        className="p-12 min-h-screen background-white">
        <h4>Action Button Test</h4>
        <ActionButton text="My Action" />
        <div className="bg-slate-500 p-4 mt-4">
            <h4>Counter 1</h4>
            <Counter initialCount={4} />
        </div>
        <div className="bg-slate-700 p-4 mt-4">
            <h4>Counter 2</h4>
            <Counter initialCount={104} />
        </div>
    </main>);
}