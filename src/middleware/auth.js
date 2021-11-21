export default function auth({ next, router }) {
    if (!localStorage.getItem('id')) {
      return router.push("Login");
    }

    return next();
  }