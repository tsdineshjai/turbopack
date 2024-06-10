"use client";

import useNameofTheUser from "../store/hooks/useName";

export default function Page() {
	const userName = useNameofTheUser();

	return <h1>Hello, Next.js! , The user is {userName}</h1>;
}
