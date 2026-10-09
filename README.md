# Portfólio — Julio Correa

Portfólio pessoal feito com Vue 3, Ionic Vue, TypeScript e Vite. Inclui interface em português e inglês, tema claro/escuro, projetos manuais e sincronização de repositórios públicos do GitHub, PWA instalável e base Android via Capacitor.

## Rodar localmente

Requer Node.js 24 ou mais recente e npm.

```sh
npm ci
npm run dev
```

Para atualizar a lista de repositórios públicos do GitHub antes de compilar:

```sh
npm run sync:github
npm run build
```

## Publicação no GitHub Pages

O workflow `.github/workflows/pages.yml` sincroniza os repositórios públicos e publica o site sempre que há push para `master`. Em **Settings → Pages**, escolha **GitHub Actions** como fonte de publicação. O site será publicado em `https://juliodbc.github.io/portfolio/` quando o Pages estiver habilitado no repositório.

## Android com Capacitor

O projeto já tem o scaffold Android. Abra-o no Android Studio com:

```sh
npm run android:sync
npm run android:open
```

`android:sync` compila o site e sincroniza os plugins e arquivos web no projeto Android. A configuração Capacitor usa o identificador `com.juliocorrea.portfolio`, splash escura e os plugins oficiais de compartilhamento, feedback tátil e status bar. A compilação/execução final do APK requer Android Studio e Android SDK instalados.

Os arquivos-fonte `assets/icon-only.png` e `assets/splash.png` foram criados a partir da marca `public/portfolio-icon.svg`. Para regenerar os recursos Android após alterar a marca, execute `npx capacitor-assets generate --android`; o gerador oficial grava os ícones e splash no projeto `android/` seguindo o guia de [Splash Screens and Icons do Capacitor](https://capacitorjs.com/docs/guides/splash-screens-and-icons).
