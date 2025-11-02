import React, {ReactNode} from 'react';
import {cn} from "@/lib/utils";

interface Props<T extends { id: string | number }> {
    data: T[];
    renderItem: (item: T, index: number) => ReactNode;
    columns?: number ;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

export default function List<T extends { id: number }>(props: Props<T>) {
    const {
        data,
        renderItem,
        columns = 3,
        className,
        style,
        id,
    } = props

    return (
        <div
            id={id}
            className={cn("grid gap-4", className)}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...style }}
        >
            {Array.isArray(data) &&
                data.map((item, index) => <div key={`${item.id}${index}`}>{renderItem(item, index)}</div>)}
        </div>
    );
}
