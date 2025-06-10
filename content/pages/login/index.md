---
title: Connexion
slug: /login
sections:
- type: GenericSection
    title:
      text: Connectez-vous à votre compte Veroo
      color: text-dark
      type: TitleBlock
    subtitle: Accédez à votre espace personnel
    text: >
      Entrez vos identifiants pour accéder à votre espace Veroo.<br />
      Vous n'avez pas de compte ? <a href="/sign-up">Inscrivez-vous ici</a>.
    media:
      url: /images/login-illustration.svg
      altText: Illustration de connexion
      type: ImageBlock
    badge:
      label: Connexion Sécurisée
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: LoginFormBlock
    elementId: login-form
    title: Login to your account
    submitButton:
      type: SubmitButtonFormControl
      label: Login
      style: primary
      icon: arrowRight
      showIcon: true

  - type: SignupFormBlock
    elementId: signup-form
    title: Create an account
    submitButton:
      type: SubmitButtonFormControl
      label: Sign Up
      style: primary
      icon: arrowRight
      showIcon: true
    colors: bg-light-fg-dark
seo:
  metaTitle: Connexion - Veroo
  metaDescription: Page de connexion pour accéder à votre compte Veroo.
  socialImage: /images/login-illustration.svg
  type: Seo
type: PageLayout
---
