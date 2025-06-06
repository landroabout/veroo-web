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
  - type: GenericSection
    title:
      text: Formulaire de connexion
      color: text-primary
      type: TitleBlock
    media:
      fields:
        - name: email
          label: Email
          hideLabel: false
          placeholder: Votre email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: password
          label: Mot de passe
          hideLabel: false
          placeholder: Votre mot de passe
          isRequired: true
          width: full
          type: PasswordFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Se connecter
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    colors: bg-light-fg-dark
seo:
  metaTitle: Connexion - Veroo
  metaDescription: Page de connexion pour accéder à votre compte Veroo.
  socialImage: /images/login-illustration.svg
  type: Seo
type: PageLayout
---
