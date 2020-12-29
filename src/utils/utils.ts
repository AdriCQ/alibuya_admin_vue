export const ScrollTop = () => {
  document.scrollingElement?.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}