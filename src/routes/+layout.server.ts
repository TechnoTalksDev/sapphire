import * as auth from '$lib/server/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (!event.locals.user) {
		return {user: null}
		//return redirect(302, '/demo/lucia/login');
	}
	return { user: event.locals.user };
};

