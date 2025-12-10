import type { PageData } from '$lib/models/page'
import leaders from '$lib/pages/leaders'
import vivaemprende from '$lib/pages/vivaemprende'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<{ slug: string }, PageData> = async ({ params }) => {
  const { slug } = params

  // Import all markdown files from the content directory
  // Note: This relies on Vite's import.meta.glob feature
  const modules = import.meta.glob('/src/content/pages/*.md')

  const path = `/src/content/pages/${slug}.md`

  if (!modules[path]) {
    // Fallback to old hardcoded data if file doesn't exist (optional, or just 404)
    const routes = {
      leaders,
      vivaemprende,
    }
    const data = routes[slug]
    if (data) return { body: data }

    return { status: 404 }
  }

  const mod = await modules[path]()
  const { attributes } = mod as { attributes: PageData }

  return {
    body: attributes
  }
}
