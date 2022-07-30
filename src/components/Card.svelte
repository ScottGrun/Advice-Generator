<script>
  import DiceButton from "~/components/DiceButton.svelte";
  import Divider from "~/components/Divider.svelte";
</script>

<section class="card">
  <h1 class="advice-number">Advice #117</h1>
  <p class="quote">
    "It is easy to sit up and take notice, what's difficult is getting up and
    taking action."
  </p>

  <div class="divider-wrapper">
    <Divider className="divider" />
  </div>
  <div class="dice-button-wrapper">
    <DiceButton />
  </div>
</section>

<style>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
    border-radius: 10px;
    background-color: var(--dark-grayish-blue);
    text-align: center;
  }

  .advice-number {
    margin-top: 40px;

    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.4571425914764404px;
    text-transform: uppercase;
    color: var(--neon-green);
  }

  .quote {
    font-family: Manrope;
    font-size: 24px;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: -0.2571428716182709px;
  }

  .divider-wrapper {
    margin-bottom: 64px;
  }

  .dice-button-wrapper {
    position: absolute;
    bottom: -32px;
    margin: 0 auto;
    left: calc(50% - 32px);
  }
</style>
