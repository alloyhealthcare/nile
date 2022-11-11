<template>
  <div class="flex flex-col overflow-hidden">
    <global-navigation />
    <div class="flex flex-row flex-grow overflow-x-auto w-full items-stretch">
      <space-sidebar class="sidebar absolute z-2" :title="spaceTitle" :meta="spaceMeta" :actions="hasSidebarActions">
        <template #sidebarList>
          <slot name="spaceSidebarList" />
        </template>
        <template #sidebarActions>
          <slot name="spaceSidebarActions" />
        </template>
      </space-sidebar>
      <main
        v-dragscroll:nochilddrag
        class="flex z-3 flex-row gap-x-8 page-content snap-x relative left-98 pt-9 pl-12 pr-12  main"
      >
        <slot name="page-content" />
      </main>
      <div class="pb-9 mr-9 pl-98 justify-self-end absolute bottom-0 inset-x-0 z-5">
        <space-navigation>
          <template #spaceNavigationButtons>
            <slot name="spaceNav" />
          </template>
        </space-navigation>
      </div>
    </div>
  </div>
</template>

<static-query>

</static-query>

<script>
import GlobalNavigation from "../components/Navigation/GlobalNavigation.vue";
import SpaceSidebar from "../components/Structural/SpaceSidebar.vue";
import SpaceNavigation from "../components/Navigation/SpaceNavigation.vue";

export default {
  components: {
    GlobalNavigation,
    SpaceSidebar,
    SpaceNavigation,
  },
  props: ["sidebar", "page-content", "spaceNav", "spaceTitle", "spaceMeta", "hasSidebarActions"],
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.main {
  backdrop-filter: blur(1em);
}
</style>
