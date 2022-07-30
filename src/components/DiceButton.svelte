<script>
  export let onClick;
</script>

<button on:click={() => onClick()}>
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      fill="#202733"
    />
  </svg>
</button>

<style>
  button {
    display: grid;
    place-content: center;
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background-color: var(--neon-green);
    transition: box-shadow, transform 250ms ease;
    will-change: contents;
  }

  button:hover {
    box-shadow: 0px 0px 40px var(--neon-green);
    cursor: pointer;
    transform: scale(0.95);
  }

  button:hover > svg {
    transition: all 300ms ease;
    transform: rotate(45deg);
  }
</style>
