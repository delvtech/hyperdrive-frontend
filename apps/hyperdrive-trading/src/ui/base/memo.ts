import React, { FunctionComponent } from "react";

export function memoComponent<P extends object>(
  displayName: string,
  Component: FunctionComponent<P>,
): React.NamedExoticComponent<P> {
  const MemoizedComponent = React.memo(Component);
  MemoizedComponent.displayName = displayName;
  return MemoizedComponent;
}
