<script>

</script>

<footer>
  <div class='footer-left'>
    <h2>(MAYBE SO)</h2>
    <p>Copyright 2021. All rights reserved.<br>Made with ♥ by Maybe So</p>
  </div>
  <div class='footer-right'>
    <p>501 Eastern Parkway<br>Louisville, KY 40217</p>
    <p>howdy@maybeso.studio</p>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--black);
    padding: 60px 86px;
  }

  h2 {
    font-family: EditorialNew;
    font-size: 2.5rem;
    margin-bottom: 60px;
    color: white;
  }

  p {
    color: white;
    font-size: 1rem;
  }

  .footer-right {
    align-self: flex-end;
  }

  .footer-right p {
    margin-top: 24px;
    text-align: right;
  }

  @media screen and (max-width: 650px) {
    footer {
      padding: 60px 35px;
      flex-direction: column;
    }

    h2 {
      margin-bottom: 10px;
    }

    .footer-left p {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    .footer-right {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 40px;
    }

    .footer-right p {
      text-align: left;
    }
  }
</style>