import style from "./privacy.module.scss";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <div className={style["mainsite-bg"]}>
      <Head>
        {/* Primary Meta Tags  */}
        <meta name="title" content="ScriptHome | Privacy" />
        <meta
          name="description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/" />
        <meta property="og:title" content="ScriptHome | Privacy" />
        <meta
          property="og:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667065497/site-preview_vcfic9.png"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/" />
        <meta property="twitter:domain" content="https://scripthome.org/" />
        <meta property="twitter:title" content="ScriptHome | Privacy" />
        <meta
          property="twitter:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667065497/site-preview_vcfic9.png"
        />
      </Head>
      <div>
        <nav className={style["navbar"]}>
          <div className={style["container"]}>
            <div>
              <h1 className={style["head-1"] + " " + style["font-family"]}>
                Scripthome
              </h1>
              <p>Privacy Policy</p>
            </div>
          </div>
        </nav>

        <div className={style["container"]}>
          <div
            className={
              style["section-container"] +
              " " +
              style["pricing-cards-container-mod"]
            }
          >
            <div className={style["container-wrapper"]}>
              <div className={style["responsive-margin"]}>
                <div
                  className={
                    style["col-12"] +
                    " " +
                    style["col-md-8"] +
                    " " +
                    style["responsive-margin-mod"]
                  }
                >
                  <h1
                    className={
                      style["display-2"] +
                      " " +
                      style["color-mod"] +
                      " " +
                      style["head-1"] +
                      " " +
                      style["font-family"]
                    }
                  >
                    Privacy Policy
                  </h1>
                  <p className={style["mb-0"] + " " + style["color-mod"]}>
                    Updated at 2022-10-14
                  </p>
                </div>
                <br />
                <br />
                <br />
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Scripthome (“we,” “our,” or “us”) is committed to protecting
                  your privacy. This Privacy Policy explains how your personal
                  information is collected, used, and disclosed by Scripthome.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  This Privacy Policy applies to our website, and its associated
                  subdomains (collectively, our “Service”) alongside our
                  application, Scripthome. By accessing or using our Service,
                  you signify that you have read, understood, and agree to our
                  collection, storage, use, and disclosure of your personal
                  information as described in this Privacy Policy and our Terms
                  of Service.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Definitions and key terms
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  To help explain things as clearly as possible in this Privacy
                  Policy, every time any of these terms are referenced, are
                  strictly defined as:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Cookie:&nbsp;small amount of data generated by a website and
                    saved by your web browser. It is used to identify your
                    browser, provide analytics, remember information about you
                    such as your language preference or login information.
                  </li>
                  <li className={style["font-family"]}>
                    Company: when this policy mentions “Company,” “we,” “us,” or
                    “our,” it refers to Scripthome, that is responsible for your
                    information under this Privacy Policy.
                  </li>
                  <li className={style["font-family"]}>
                    Country: where Scripthome or the owners/founders of
                    Scripthome are based, in this case is USA
                  </li>
                  <li className={style["font-family"]}>
                    Customer:&nbsp;refers to the company, organization or person
                    that signs up to use the Scripthome Service to manage the
                    relationships with your consumers or service users.
                  </li>
                  <li className={style["font-family"]}>
                    Device:&nbsp;any internet connected device such as a phone,
                    tablet, computer or any other device that can be used to
                    visit Scripthome and use the services.
                  </li>
                  <li className={style["font-family"]}>
                    IP address: Every device connected to the Internet is
                    assigned a number known as an Internet protocol (IP)
                    address. These numbers are usually assigned in geographic
                    blocks. An IP address can often be used to identify the
                    location from which a device is connecting to the Internet.
                  </li>
                  <li className={style["font-family"]}>
                    Personnel:&nbsp;refers to those individuals who are employed
                    by Scripthome or are under contract to perform a service on
                    behalf of one of the parties.
                  </li>
                  <li className={style["font-family"]}>
                    Personal Data: any information that directly, indirectly, or
                    in connection with other information — including a personal
                    identification number — allows for the identification or
                    identifiability of a natural person.
                  </li>
                  <li className={style["font-family"]}>
                    Service: refers to the service provided by Scripthome as
                    described in the relative terms (if available) and on this
                    platform.
                  </li>
                  <li className={style["font-family"]}>
                    Third-party service:&nbsp;refers to advertisers, contest
                    sponsors, promotional and marketing partners, and others who
                    provide our content or whose products or services we think
                    may interest you.
                  </li>
                  <li className={style["font-family"]}>
                    Website: Scripthome{"'"}s site, which can be accessed via
                    this URL: https://scripthome.org/
                  </li>
                  <li className={style["font-family"]}>
                    You: a person or entity that is registered with Scripthome
                    to use the Services.
                  </li>
                </ul>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  What Information Do We Collect?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We collect information from you when you visit our website,
                  register on our site, place an order, subscribe to our
                  newsletter, respond to a survey or fill out a form.
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>Name / Username</li>
                  <li className={style["font-family"]}>Email Addresses</li>
                  <li className={style["font-family"]}>Age</li>
                  <li className={style["font-family"]}>Password</li>
                </ul>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We also collect information from mobile devices for a better
                  user experience, although these features are completely
                  optional:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Location (GPS): Location data&nbsp;helps to create an
                    accurate representation of your interests, and this can be
                    used to bring more targeted and relevant ads to potential
                    customers.
                  </li>
                  <li className={style["font-family"]}>
                    Photo Gallery (Pictures): Granting photo gallery
                    access&nbsp;allows the user to upload any picture from their
                    photo gallery, you can safely deny photo gallery access for
                    this .
                  </li>
                </ul>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  When does Scripthome use end user information from third
                  parties?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Scripthome will collect End User Data necessary to provide the
                  Scripthome services to our customers. End users may
                  voluntarily provide us with information they have made
                  available on social media websites. If you provide us with any
                  such information, we may collect publicly available
                  information from the social media websites you have indicated.
                  You can control how much of your information social media
                  websites make public by visiting these websites and changing
                  your privacy settings.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  When does Scripthome use customer information from third
                  parties?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We receive some information from the third parties when you
                  contact us. For example, when you submit your email address to
                  us to show interest in becoming a Scripthome customer, we
                  receive information from a third party that provides automated
                  fraud detection services to Scripthome. We also occasionally
                  collect information that is made publicly available on social
                  media websites. You can control how much of your information
                  social media websites make public by visiting these websites
                  and changing your privacy settings.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Do we share the information we collect with third parties?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you. We may also share it with our
                  current and future affiliated companies and business partners,
                  and if we are involved in a merger, asset sale or other
                  business reorganization, we may also share or transfer your
                  personal and non-personal information to our
                  successors-in-interest.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may engage trusted third party service providers to perform
                  functions and provide services to us, such as hosting and
                  maintaining our servers and the website, database storage and
                  management, e-mail management, storage marketing, credit card
                  processing, customer service and fulfilling orders for
                  products and services you may purchase through the website. We
                  will likely share your personal information, and possibly some
                  non-personal information, with these third parties to enable
                  them to perform these services for us and for you.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may share portions of our log file data, including IP
                  addresses, for analytics purposes with third parties such as
                  web analytics partners, application developers, and ad
                  networks. If your IP address is shared, it may be used to
                  estimate general location and other technographics such as
                  connection speed, whether you have visited the website in a
                  shared location, and type of the device used to visit the
                  website. They may aggregate information about our advertising
                  and what you see on the website and then provide auditing,
                  research and reporting for us and our advertisers.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may also disclose personal and non-personal information
                  about you to government or law enforcement officials or
                  private parties as we, in our sole discretion, believe
                  necessary or appropriate in order to respond to claims, legal
                  process (including subpoenas), to protect our rights and
                  interests or those of a third party, the safety of the public
                  or any person, to prevent or stop any illegal, unethical, or
                  legally actionable activity, or to otherwise comply with
                  applicable court orders, laws, rules and regulations.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Where and when is information collected from customers and end
                  users?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Scripthome will collect personal information that you submit
                  to us. We may also receive personal information about you from
                  third parties as described above.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  How Do We Use The Information We Collect?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Any of the information we collect from you may be used in one
                  of the following ways:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    To personalize your experience (your information helps us to
                    better respond to your individual needs)
                  </li>
                  <li className={style["font-family"]}>
                    To improve our website (we continually strive to improve our
                    website offerings based on the information and feedback we
                    receive from you)
                  </li>
                  <li className={style["font-family"]}>
                    To improve customer service (your information helps us to
                    more effectively respond to your customer service requests
                    and support needs)
                  </li>
                  <li className={style["font-family"]}>
                    To process transactions
                  </li>
                  <li className={style["font-family"]}>
                    To administer a contest, promotion, survey or other site
                    feature
                  </li>
                  <li className={style["font-family"]}>
                    To send periodic emails
                  </li>
                </ul>
                <p></p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  How Do We Use Your Email Address?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  By submitting your email address on this website, you agree to
                  receive emails from us. You can cancel your participation in
                  any of these email lists at any time by clicking on the
                  opt-out link or other unsubscribe option that is included in
                  the respective email. We only send emails to people who have
                  authorized us to contact them, either directly, or through a
                  third party. We do not send unsolicited commercial emails,
                  because we hate spam as much as you do. By submitting your
                  email address, you also agree to allow us to use your email
                  address for customer audience targeting on sites like
                  Facebook, where we display custom advertising to specific
                  people who have opted-in to receive communications from us.
                  Email addresses submitted only through the order processing
                  page will be used for the sole purpose of sending you
                  information and updates pertaining to your order. If, however,
                  you have provided the same email to us through another method,
                  we may use it for any of the purposes stated in this Policy.
                  Note: If at any time you would like to unsubscribe from
                  receiving future emails, we include detailed unsubscribe
                  instructions at the bottom of each email.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  How Long Do We Keep Your Information?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We keep your information only so long as we need it to provide
                  Scripthome to you and fulfill the purposes described in this
                  policy. This is also the case for anyone that we share your
                  information with and who carries out services on our behalf.
                  When we no longer need to use your information and there is no
                  need for us to keep it to comply with our legal or regulatory
                  obligations, we{"'"}ll either remove it from our systems or
                  depersonalize it so that we can{"'"}t identify you.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  How Do We Protect Your Information?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We implement a variety of security measures to maintain the
                  safety of your personal information when you place an order or
                  enter, submit, or access your personal information. We offer
                  the use of a secure server. All supplied sensitive/credit
                  information is transmitted via Secure Socket Layer (SSL)
                  technology and then encrypted into our Payment gateway
                  providers database only to be accessible by those authorized
                  with special access rights to such systems, and are required
                  to keep the information confidential. After a transaction,
                  your private information (credit cards, social security
                  numbers, financials, etc.) is never kept on file. We cannot,
                  however, ensure or warrant the absolute security of any
                  information you transmit to Scripthome or guarantee that your
                  information on the Service may not be accessed, disclosed,
                  altered, or destroyed by a breach of any of our physical,
                  technical, or managerial safeguards.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Could my information be transferred to other countries?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Scripthome is incorporated in USA. Information collected via
                  our website, through direct interactions with you, or from use
                  of our help services may be transferred from time to time to
                  our offices or personnel, or to third parties, located
                  throughout the world, and may be viewed and hosted anywhere in
                  the world, including countries that may not have laws of
                  general applicability regulating the use and transfer of such
                  data. To the fullest extent allowed by applicable law, by
                  using any of the above, you voluntarily consent to the
                  trans-border transfer and hosting of such information.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Is the information collected through the Scripthome Service
                  secure?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We take precautions to protect the security of your
                  information. We have physical, electronic, and managerial
                  procedures to help safeguard, prevent unauthorized access,
                  maintain data security, and correctly use your information.
                  However, neither people nor security systems are foolproof,
                  including encryption systems. In addition, people can commit
                  intentional crimes, make mistakes or fail to follow policies.
                  Therefore, while we use reasonable efforts to protect your
                  personal information, we cannot guarantee its absolute
                  security. If applicable law imposes any non-disclaimable duty
                  to protect your personal information, you agree that
                  intentional misconduct will be the standards used to measure
                  our compliance with that duty.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Can I update or correct my information?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  The rights you have to request updates or corrections to the
                  information Scripthome collects depend on your relationship
                  with Scripthome. Personnel may update or correct their
                  information as detailed in our internal company employment
                  policies.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Customers have the right to request the restriction of certain
                  uses and disclosures of personally identifiable information as
                  follows. You can&nbsp;contact us in order to (1) update or
                  correct your personally identifiable information, (2) change
                  your preferences with respect to communications and other
                  information you receive from us, or (3) delete the personally
                  identifiable information maintained about you on our systems
                  (subject to the following paragraph), by&nbsp;cancelling your
                  account. Such updates, corrections, changes and deletions will
                  have no effect on other information that we maintain, or
                  information that we have provided to third parties in
                  accordance with this Privacy Policy prior to such update,
                  correction, change or deletion. To protect your privacy and
                  security, we may take reasonable steps (such as requesting a
                  unique password) to verify your identity before granting you
                  profile access or making corrections. You are responsible for
                  maintaining the secrecy of your unique password and account
                  information at all times.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  You should be aware that it is not technologically possible to
                  remove each and every record of the information you have
                  provided to us from our system. The need to back up our
                  systems to protect information from inadvertent loss means
                  that a copy of your information may exist in a non-erasable
                  form that will be difficult or impossible for us to locate.
                  Promptly after receiving your request, all personal
                  information stored in databases we actively use, and other
                  readily searchable media will be updated, corrected, changed
                  or deleted, as appropriate, as soon as and to the extent
                  reasonably and technically practicable.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  If you are an end user and wish to update, delete, or receive
                  any information we have about you, you may do so by contacting
                  the organization of which you are a customer.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Sale of Business
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We reserve the right to transfer information to a third party
                  in the event of a sale, merger or other transfer of all or
                  substantially all of the assets of Scripthome or any of its
                  Corporate Affiliates (as defined herein), or that portion of
                  Scripthome or any of its Corporate Affiliates to which the
                  Service relates, or in the event that we discontinue our
                  business or file a petition or have filed against us a
                  petition in bankruptcy, reorganization or similar proceeding,
                  provided that the third party agrees to adhere to the terms of
                  this Privacy Policy.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Affiliates
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may disclose information (including personal information)
                  about you to our Corporate Affiliates. For purposes of this
                  Privacy Policy, {"'"}Corporate Affiliate{"'"} means any person
                  or entity which directly or indirectly controls, is controlled
                  by or is under common control with Scripthome, whether by
                  ownership or otherwise. Any information relating to you that
                  we provide to our Corporate Affiliates will be treated by
                  those Corporate Affiliates in accordance with the terms of
                  this Privacy Policy.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Governing Law
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  This Privacy Policy is governed by the laws of USA without
                  regard to its conflict of laws provision. You consent to the
                  exclusive jurisdiction of the courts in connection with any
                  action or dispute arising between the parties under or in
                  connection with this Privacy Policy except for those
                  individuals who may have rights to make claims under Privacy
                  Shield, or the Swiss-US framework.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  The laws of USA, excluding its conflicts of law rules, shall
                  govern this Agreement and your use of the website. Your use of
                  the website may also be subject to other local, state,
                  national, or international laws.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  By using Scripthome or contacting us directly, you signify
                  your acceptance of this Privacy Policy. If you do not agree to
                  this Privacy Policy, you should not engage with our website,
                  or use our services. Continued use of the website, direct
                  engagement with us, or following the posting of changes to
                  this Privacy Policy that do not significantly affect the use
                  or disclosure of your personal information will mean that you
                  accept those changes.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Your Consent
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We{"'"}ve updated our&nbsp;Privacy Policy&nbsp;to provide you
                  with complete transparency into what is being set when you
                  visit our site and how it{"'"}s being used. By using our
                  Scripthome, registering an account, or making a purchase, you
                  hereby consent to our Privacy Policy and agree to its terms.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Links to Other Websites
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  This Privacy Policy applies only to the Services. The Services
                  may contain links to other websites not operated or controlled
                  by Scripthome. We are not responsible for the content,
                  accuracy or opinions expressed in such websites, and such
                  websites are not investigated, monitored or checked for
                  accuracy or completeness by us. Please remember that when you
                  use a link to go from the Services to another website, our
                  Privacy Policy is no longer in effect. Your browsing and
                  interaction on any other website, including those that have a
                  link on our platform, is subject to that website’s own rules
                  and policies. Such third parties may use their own cookies or
                  other methods to collect information about you.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Advertising
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  This website may contain third party advertisements and links
                  to third party sites. Scripthome does not make any
                  representation as to the accuracy or suitability of any of the
                  information contained in those advertisements or sites and
                  does not accept any responsibility or liability for the
                  conduct or content of those advertisements and sites and the
                  offerings made by the third parties.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Advertising keeps Scripthome and many of the websites and
                  services you use free of charge. We work hard to make sure
                  that ads are safe, unobtrusive, and as relevant as possible.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Third party advertisements and links to other sites where
                  goods or services are advertised are not endorsements or
                  recommendations by Scripthome of the third party sites, goods
                  or services. Scripthome takes no responsibility for the
                  content of any of the ads, promises made, or the
                  quality/reliability of the products or services offered in all
                  advertisements.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Cookies for Advertising
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  These cookies collect information over time about your online
                  activity on the website and other online services to make
                  online advertisements more relevant and effective to you. This
                  is known as interest-based advertising. They also perform
                  functions like preventing the same ad from continuously
                  reappearing and ensuring that ads are properly displayed for
                  advertisers. Without cookies, it{"'"}s really hard for an
                  advertiser to reach its audience, or to know how many ads were
                  shown and how many clicks they received.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Cookies
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Scripthome uses {"'"}Cookies{"'"} to identify the areas of our
                  website that you have visited. A Cookie is a small piece of
                  data stored on your computer or mobile device by your web
                  browser. We use Cookies to enhance the performance and
                  functionality of our website but are non-essential to their
                  use. However, without these cookies, certain functionality
                  like videos may become unavailable or you would be required to
                  enter your login details every time you visit the website as
                  we would not be able to remember that you had logged in
                  previously. Most web browsers can be set to disable the use of
                  Cookies. However, if you disable Cookies, you may not be able
                  to access functionality on our website correctly or at all. We
                  never place Personally Identifiable Information in Cookies.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Blocking and disabling cookies and similar technologies
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Wherever you{"'"}re located you may also set your browser to
                  block cookies and similar technologies, but this action may
                  block our essential cookies and prevent our website from
                  functioning properly, and you may not be able to fully utilize
                  all of its features and services. You should also be aware
                  that you may also lose some saved information (e.g. saved
                  login details, site preferences) if you block cookies on your
                  browser. Different browsers make different controls available
                  to you. Disabling a cookie or category of cookie does not
                  delete the cookie from your browser, you will need to do this
                  yourself from within your browser, you should visit your
                  browser{"'"}s help menu for more information.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Remarketing Services
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We use remarketing services. What Is Remarketing? In digital
                  marketing, remarketing (or retargeting) is the practice of
                  serving ads across the internet to people who have already
                  visited your website. It allows your company to seem like they
                  {"'"}re “following” people around the internet by serving ads
                  on the websites and platforms they use most.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Kids{"'"} Privacy
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We do not address anyone under the age of 13. We do not
                  knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 13
                  without verification of parental consent, We take steps to
                  remove that information from Our servers.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Changes To Our Privacy Policy
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may change our Service and policies, and we may need to
                  make changes to this Privacy Policy so that they accurately
                  reflect our Service and policies. Unless otherwise required by
                  law, we will notify you (for example, through our Service)
                  before we make changes to this Privacy Policy and give you an
                  opportunity to review them before they go into effect. Then,
                  if you continue to use the Service, you will be bound by the
                  updated Privacy Policy. If you do not want to agree to this or
                  any updated Privacy Policy, you can delete your account.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Third-Party Services
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may display, include or make available third-party content
                  (including data, information, applications and other products
                  services) or provide links to third-party websites or services
                  ({"'"}Third- Party Services{"'"}).
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  You acknowledge and agree that Scripthome shall not be
                  responsible for any Third-Party Services, including their
                  accuracy, completeness, timeliness, validity, copyright
                  compliance, legality, decency, quality or any other aspect
                  thereof. Scripthome does not assume and shall not have any
                  liability or responsibility to you or any other person or
                  entity for any Third-Party Services.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Third-Party Services and links thereto are provided solely as
                  a convenience to you and you access and use them entirely at
                  your own risk and subject to such third parties{"'"} terms and
                  conditions.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Tracking Technologies
                </h1>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <br />
                  <li className={style["font-family"]}>
                    Cookies <br />
                    <p
                      className={
                        style["font-family"] +
                        " " +
                        style["text-muted"] +
                        " " +
                        style["para"]
                      }
                    >
                      We use Cookies to enhance the performance and
                      functionality of our but are non-essential to their use.
                      However, without these cookies, certain functionality like
                      videos may become unavailable or you would be required to
                      enter your login details every time you visit the as we
                      would not be able to remember that you had logged in
                      previously.
                    </p>
                  </li>
                  <br />
                  <li className={style["font-family"]}>
                    Local Storage <br />
                    <p
                      className={
                        style["font-family"] +
                        " " +
                        style["text-muted"] +
                        " " +
                        style["para"]
                      }
                    >
                      Local Storage sometimes known as DOM storage, provides web
                      apps with methods and protocols for storing client-side
                      data. Web storage supports persistent data storage,
                      similar to cookies but with a greatly enhanced capacity
                      and no information stored in the HTTP request header.
                    </p>
                  </li>
                  <br />
                  <li className={style["font-family"]}>
                    Sessions <br />
                    <p
                      className={
                        style["font-family"] +
                        " " +
                        style["text-muted"] +
                        " " +
                        style["para"]
                      }
                    >
                      uses {"'"}Sessions{"'"} to identify the areas of our
                      website that you have visited. A Session is a small piece
                      of data stored on your computer or mobile device by your
                      web browser.
                    </p>
                  </li>
                  <br />
                </ul>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Information about General Data Protection Regulation (GDPR)
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We may be collecting and using information from you if you are
                  from the European Economic Area (EEA), and in this section of
                  our Privacy Policy we are going to explain exactly how and why
                  is this data collected, and how we maintain this data under
                  protection from being replicated or used in the wrong way.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  What is GDPR?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  GDPR is an EU-wide privacy and data protection law that
                  regulates how EU residents{"'"} data is protected by companies
                  and enhances the control&nbsp;the EU residents have, over
                  their personal data.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  The GDPR is relevant to any globally operating company and not
                  just the EU-based businesses and EU residents. Our customers
                  {"'"}
                  data is important irrespective of where they are located,
                  which is why we have implemented GDPR controls as our baseline
                  standard for all our operations worldwide.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  What is personal data?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Any data that relates to an identifiable or identified
                  individual. GDPR covers a broad spectrum of information that
                  could be used on its own, or in combination with other pieces
                  of information, to identify a person. Personal data extends
                  beyond a person{"'"}s name or email address. Some examples
                  include financial information, political opinions, genetic
                  data, biometric data, IP addresses, physical address, sexual
                  orientation, and ethnicity.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  The Data Protection Principles include requirements such as:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Personal data collected must be processed in a fair, legal,
                    and transparent way and should only be used in a way that a
                    person would reasonably expect.
                  </li>
                  <li className={style["font-family"]}>
                    Personal data should only be collected to fulfil a specific
                    purpose and it should only be used for that purpose.
                    Organizations must specify why they need the personal data
                    when they collect it.
                  </li>
                  <li className={style["font-family"]}>
                    Personal data should be held no longer than necessary to
                    fulfil its purpose.
                  </li>
                  <li className={style["font-family"]}>
                    People covered by the GDPR have the right to access their
                    own personal data. They can also request a copy of their
                    data, and that their data be updated, deleted, restricted,
                    or moved to another organization.
                  </li>
                </ul>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Why is GDPR important?
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  GDPR adds some new requirements regarding how companies should
                  protect individuals{"'"} personal data that they collect and
                  process. It also raises the stakes for compliance by
                  increasing enforcement and imposing greater fines for breach.
                  Beyond these facts it{"'"}s simply the right thing to do. At
                  Scripthome we strongly believe that your data privacy is very
                  important and we already have solid security and privacy
                  practices in place that go beyond the requirements of this new
                  regulation.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Individual Data Subject{"'"}s Rights - Data Access,
                  Portability and Deletion
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We are committed to helping our customers meet the&nbsp;data
                  subject rights requirements of GDPR. Scripthome processes or
                  stores all personal data in fully vetted, DPA compliant
                  vendors. We do store all conversation and personal data for up
                  to 6 years unless your account is deleted. In which case, we
                  dispose of all data in accordance with our Terms of Service
                  and Privacy Policy, but we will not hold it longer than 60
                  days.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We are aware that if you are working with EU customers, you
                  need to be able to provide them with the ability to access,
                  update, retrieve and remove personal data. We got you! We{"'"}
                  ve been set up as self service from the start and have always
                  given you access to your data and your customers data. Our
                  customer&nbsp;support team is here for you to answer any
                  questions you might have about working with the API.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  California Residents
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  The California Consumer Privacy Act (CCPA) requires us to
                  disclose categories of Personal Information we collect and how
                  we use it, the categories of sources from whom we collect
                  Personal Information, and the third parties with whom we share
                  it, which we have explained above.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We are also required to communicate information about rights
                  California residents have under California law. You may
                  exercise the following rights:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Right to Know and Access. You may submit a verifiable
                    request for information regarding the: (1) categories of
                    Personal Information we collect, use, or share; (2) purposes
                    for which categories of Personal Information are collected
                    or used by us; (3) categories of sources from which we
                    collect Personal Information; and (4) specific pieces of
                    Personal Information we have collected about you.
                  </li>
                  <li className={style["font-family"]}>
                    Right to Equal Service. We will not discriminate against you
                    if you exercise your privacy rights.
                  </li>
                  <li className={style["font-family"]}>
                    Right to Delete. You may submit a verifiable request to
                    close your account and we will delete Personal Information
                    about you that we have collected.
                  </li>
                  <li className={style["font-family"]}>
                    Request that a business that sells a consumer{"'"}s personal
                    data, not sell the consumer{"'"}s personal data.
                  </li>
                </ul>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We do not sell the Personal Information of our users.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  For more information about these rights, please contact us.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  California Online Privacy Protection Act (CalOPPA)
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  CalOPPA requires us to disclose categories of Personal
                  Information we collect and how we use it, the categories of
                  sources from whom we collect Personal Information, and the
                  third parties with whom we share it, which we have explained
                  above.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  CalOPPA users have the following rights:
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Right to Know and Access. You may submit a verifiable
                    request for information regarding the: (1) categories of
                    Personal Information we collect, use, or share; (2) purposes
                    for which categories of Personal Information are collected
                    or used by us; (3) categories of sources from which we
                    collect Personal Information; and (4) specific pieces of
                    Personal Information we have collected about you.
                  </li>
                  <li className={style["font-family"]}>
                    Right to Equal Service. We will not discriminate against you
                    if you exercise your privacy rights.
                  </li>
                  <li className={style["font-family"]}>
                    Right to Delete. You may submit a verifiable request to
                    close your account and we will delete Personal Information
                    about you that we have collected.
                  </li>
                  <li className={style["font-family"]}>
                    Right to request that a business that sells a consumer{"'"}s
                    personal data, not sell the consumer{"'"}s personal data.
                  </li>
                </ul>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  We do not sell the Personal Information of our users.
                </p>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  For more information about these rights, please contact us.
                </p>
                <br />
                <h1
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["head-1"]
                  }
                >
                  Contact Us
                </h1>
                <p
                  className={
                    style["font-family"] +
                    " " +
                    style["text-muted"] +
                    " " +
                    style["para"]
                  }
                >
                  Don{"'"}t hesitate to contact us if you have any questions.
                </p>
                <ul className={style["ul-mod"] + " " + style["text-muted"]}>
                  <li className={style["font-family"]}>
                    Via Email: contact@scripthome.org
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
