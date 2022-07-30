<script lang="ts">
  let className: string;
</script>

<div class={`wrapper ${className}`}>
  <div class="horizontal-bar" />
  <div class="vertical-bar-wrapper">
    <div class="vertical-bar" />
    <div class="vertical-bar" />
  </div>
  <div class="horizontal-bar" />
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .horizontal-bar {
    display: block;
    height: 1px;
    background-color: var(--grayish-blue);
    width: 100%;
  }

  .vertical-bar {
    display: block;
    height: 16px;
    width: 6px;
    border-radius: 3px;
    background-color: var(--grayish-blue);
  }

  .vertical-bar-wrapper {
    display: flex;
    gap: 8px;
  }
</style>
