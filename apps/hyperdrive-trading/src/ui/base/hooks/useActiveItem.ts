import { useState } from "react";

export function useActiveItem<T extends Record<string, any>>({
  items,
  defaultActiveItemId,
  idField,
}: {
  items: T[];
  defaultActiveItemId: string;
  idField: keyof T;
}): { activeItem: T; setActiveItem: (itemId: string) => void } {
  const [activeItemId, setActiveItemId] = useState(defaultActiveItemId);

  const setActiveItem = (itemId: string) => {
    setActiveItemId(itemId);
  };

  const activeItem = items.find((item) => item[idField] === activeItemId) as T;

  return { activeItem, setActiveItem };
}
