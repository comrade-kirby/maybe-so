<script>

</script>

<section class='what-we-do'>
  <h2>WHAT WE DO</h2>
  <div class='what-we-do-offerings'>
    <h4 class='offering-title order-1'>BRAND STRATEGY</h4>
    <ul class='offering-details order-2'>
      <li>User Research</li>
      <li>Competitive Analysis</li>
      <li>Experience and Journey Mapping</li>
      <li>User Persona Development</li>
    </ul>
    <ul class='offering-details order-3'>
      <li>Visual Branding</li>
      <li>Brand Guides / Style Manuals</li>
      <li>Social Media Collateral</li>
      <li>Block Design / Page Layout</li>
    </ul>
    <h4 class='offering-title order-4'>GRAPHIC DESIGN</h4>
    <h4 class='offering-title order-5'>WEB DESIGN</h4>
    <ul class='offering-details order-6'>
      <li>Information Architecture & Site Mapping</li>
      <li>UX Writing & Content Design</li>
      <li>Low Fidelity Wireframe Prototypes</li>
      <li>High Fidelity Interactive Prototypes</li>
    </ul>
    <ul class='offering-details order-7'>
      <li>Email Campaigns & Newsletters</li>
      <li>Blog Content</li>
      <li>Social Media Campaigns & Content</li>
    </ul>
    <h4 class='offering-title order-8'>COMMUNICATIONS, MEIDA & MARKETING</h4>
    <h4 class='offering-title order-9'>DEVELOPMENT</h4>
    <ul class='offering-details order-10'>
      <li>Squarespace Development</li>
      <li>Wordpress Development</li>
      <li>Custom Full-Stack Development</li>
    </ul>
  </div>
</section>

<style>
  .what-we-do {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    text-align: center;
    margin: 180px 0;

  }

  h4 {
    font-weight: 400;
  }

  ul {
    margin: 0;
  }


  .what-we-do-offerings {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .what-we-do-offerings h4, ul {
    box-sizing: border-box;
    flex: 50%;
    margin-bottom: 90px;
  }

  .what-we-do-offerings h4:nth-child(odd), ul:nth-child(odd) {
    text-align: right;
    padding-right: 20px;
  }

  .what-we-do-offerings h4:nth-child(even), ul:nth-child(even) {
    padding-left: 30px;
  }

  .offering-details {
    font-family: Sneak;
    font-size: 1.125rem;
    line-height: 1.625rem;
    list-style-type: none;
    padding: 0;
  }

  /* .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  } */
</style>