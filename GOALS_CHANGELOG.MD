MR 1 |27.05.2023 - STRUKTURA PAGES

1. Utworzenie Layout'u aplikacji (Nav, Main, Footer)
2. Utworzenie podstawowego routingu (struktura + trasy nawigacji)
3. Zastosowanie wbudowanych narzędzi Next'a do optymalizacji aplikacji takich jak:
   - komponent Image (optymalizacja obrazków)
   - komponent Link (nawigacja + prefetching)
   - optymalizacja fontów oraz ich zastosowanie:
     1. za pomocą className
     2. za pomocą style
     3. za pomocą cssVariables + tailwindCSS
   - komponent Script (ładowanie skryptu js, z domyślą strategią 'afterInteractive')
4. Wstępa konfiguracja tailwinda

MR 2 |02.06.2023 - STRUKTURA PAGES

1. Instalacja GraphQL oraz Apollo Client + GraphQL Codegen
2. Renderowanie stron CSR, SSG, SSR, ISR z dwóch róznych źródeł (rest api, graphql)
3. Obsługa fallbacku dla getStaticPaths (isr/[productId]) - fallback: 'false' | 'true' | 'blocking'
4. Obsługa getStaticPaths dla SSG (ssg/[productId])
5. Obsługa sciezki dla SSR (context.params) (ssr/[productId])
6. Utworzenie drzewa providerów
7. Utworzenie podstawowych customowych error page'ow (404, 500)
8. Uzycie podstawowego hook'a useRouter
9. Dodanie error-boundary

MR 3 |05.06.2023 - STRUKTURA PAGES

1. Instalacja oraz konfiguracja next-auth
2. Implementacja logowania oraz rejestracji uzytkownika (hygraph)
3. Wykorzystanie api routes
4. Dostosowanie nawigacji pod sesję (przyciski logowania, rejestacji)
5. Optymalizacja: uzycie Lazy Loading na stronie Home
6. Skorzystanie z wbudowanego komponentu next/head w celu umieszczenia tagów SEO
7. Instalacja paczki next-seo, która usprawnia ustawianie metatagów pod SEO.
