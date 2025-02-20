import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'contact/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ id: 'id' }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
