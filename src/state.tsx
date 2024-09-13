"use client";

import React, {
  createContext,
  type Dispatch,
  useContext,
  useReducer,
} from "react";
import config from "./config";

export interface Action {
  type: string;
  payload?: unknown;
}

export interface State {
  config: typeof config;
  hasLoaded: boolean;
  start: boolean;
}

export const initialState: State = {
  config,
  hasLoaded: false,
  start: false,
};

export function reducer(state: State, action: Action): State {
  const { type } = action;
  switch (type) {
    case "LOADED":
      return {
        ...state,
        hasLoaded: true,
      };
    case "START":
      return {
        ...state,
        start: true,
      };
    default:
      return state;
  }
}

export const StateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function GlobeStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateValue(): [State, Dispatch<Action>] {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a GlobeStateProvider");
  }
  return [context.state, context.dispatch];
}
