export default defineAppConfig({
  docus: {
    title: "Hoppscotch Documentation",
    titleTemplate: "%s • Hoppscotch Documentation",
    description: "Open source API development ecosystem",
    url: "https://docs.hoppscotch.io",
    image: "https://docs.hoppscotch.io/banner.png",
    socials: {
      twitter: "hoppscotch_io",
      github: "Variable1/docs",
    },
    header: {
      logo: true,
    },
    footer: {
      credits: {
        text: "Hoppscotch",
        icon: "lucide:copyright",
        href: "https://hoppscotch.io",
      },
    },
    aside: {
      level: 1,
      exclude: ["/guides/videos"], // exclude self-host page from sidebar. TODO: remove this when we launch self-host.
    },
    github: {
      repo: "docs",
      branch: "main",
      edit: true,
      owner: "Variable1",
      dir: "content",
    },
  },
})
