<script>
  const offeringBottomMargin = 90
  let h = offeringBottomMargin
</script>

<section style='--bottom-margin: {offeringBottomMargin}px'>
  <h2>WHAT WE DO</h2>
  <div bind:clientHeight={h} >
    <h4>BRAND STRATEGY</h4>
    <ul>
      <li>User Research</li>
      <li>Competitive Analysis</li>
      <li>Experience and Journey Mapping</li>
      <li>User Persona Development</li>
    </ul>
    <ul>
      <li>Visual Branding</li>
      <li>Brand Guides / Style Manuals</li>
      <li>Social Media Collateral</li>
      <li>Block Design / Page Layout</li>
    </ul>
    <h4>GRAPHIC DESIGN</h4>
    <h4>WEB DESIGN</h4>
    <ul>
      <li>Information Architecture & Site Mapping</li>
      <li>UX Writing & Content Design</li>
      <li>Low Fidelity Wireframe Prototypes</li>
      <li>High Fidelity Interactive Prototypes</li>
    </ul>
    <ul>
      <li>Email Campaigns & Newsletters</li>
      <li>Blog Content</li>
      <li>Social Media Campaigns & Content</li>
    </ul>
    <h4>COMMUNICATIONS, MEIDA & MARKETING</h4>
    <h4>DEVELOPMENT</h4>
    <ul>
      <li>Squarespace Development</li>
      <li>Wordpress Development</li>
      <li>Custom Full-Stack Development</li>
    </ul>
    <svg width='10' height='{h - offeringBottomMargin}'>
      <path d='M0 0 V {h - offeringBottomMargin}'/>
    </svg>
  </div>
</section>

<style>
  section {
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
    list-style-type: none;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 800px;
    margin: auto;
    justify-content: center;
  }

  div h4, ul {
    box-sizing: border-box;
    flex: 50%;
    margin-bottom: var(--bottom-margin);
  }

  div h4:nth-child(odd), ul:nth-child(odd) {
    text-align: right;
    padding-right: 20px;
  }

  div h4:nth-child(even), ul:nth-child(even) {
    padding-left: 30px;
  }

  svg {
    position: absolute;
  }

  path {
    stroke: var(--black);
    stroke-width: 1px;
  }
</style>