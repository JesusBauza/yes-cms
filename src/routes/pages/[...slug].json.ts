import type { PageData } from '$lib/models/page'
import leaders from '$lib/pages/leaders'
import vivaemprende from '$lib/pages/vivaemprende'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<{ slug: string }, PageData> = async (
  event
) => {
  const routes = {
    leaders,
    vivaemprende,
  }
  const data = routes[event.params.slug]
  if (!data) {
    return {
      status: 404
    }
  }
  return {
    body: data
  }
}
