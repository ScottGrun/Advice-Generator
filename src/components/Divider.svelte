<div class="divider-wrapper">
  <div class="horizontal-bar" />
  <div class="vertical-bars-wrapper">
    <div class="vertical-bar" />
    <div class="vertical-bar" />
  </div>
  <div class="horizontal-bar" />
</div>

<style>
  .divider-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .vertical-bars-wrapper {
    display: flex;
    gap: 8px;
  }

  .horizontal-bar {
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--grayish-blue);
  }

  .vertical-bar {
    display: block;
    height: 16px;
    width: 6px;
    background-color: var(--grayish-blue);
    border-radius: 3px;
  }
</style>
