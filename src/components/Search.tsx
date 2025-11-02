"use client";

import {FC, ChangeEvent, useState} from "react";
import { LucideSearch ,X} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {cn} from "@/lib/utils";

interface SearchProps {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const Search: FC<SearchProps> = ({ value = "", placeholder = "Search...", onChange, className }) => {
    const [query,setQuery] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onChange?.(e.target.value);
    };

    const onDeleted = () => {
        setQuery('')
    }

    return (
        <InputGroup className={cn(className,'bg-white rounded-4xl ')}>
            <InputGroupInput value={query} onChange={handleChange} placeholder="Search..." />
            <InputGroupAddon>
                <LucideSearch />
            </InputGroupAddon>
            {query.length > 0 && (
                <InputGroupAddon className={'cursor-pointer'} align="inline-end">
                    <X onClick={onDeleted}/>
                </InputGroupAddon>
            )}
        </InputGroup>
    );
};

export default Search;
