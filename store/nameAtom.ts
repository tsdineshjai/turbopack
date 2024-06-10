"use client";

import { atom } from "recoil";

export const nameAtom = atom({
	key: "nameOftheUser",
	default: "The Crusader",
});
