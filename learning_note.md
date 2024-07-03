- file: blogs
    - first page: `blogs/index.tsx`
    - for url using slug: `blogs/headless-seo-getting-started`
        - process by `blogs/[blogSlug].tsx`
            - -> get sanity data using `/api/blogPosts.tsx`
            - -> `blogPosts.tsx` use slug to search in sanity and return as json to `WPPost`
            - -> in the page return of `[blogSlug].tsx`, using `blog-details-area-slug.tsx` to show blog.
```mermaid
graph TD;
    A[File: blogs] --> B[First page: blogs/index.tsx]
    A --> D[blogs/blogSlug : Extract the delivery slug ]
    D --> E[Get Sanity data: /api/blogPosts ; Use slug to search in Sanity and return JSON]
    E --> F[Use slug to search in Sanity and return JSON]
    F --> G[In the page return of blogSlug]
    G --> H[Show blog: blog-details-area-slug]
```