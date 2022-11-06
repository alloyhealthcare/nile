<template>
  <div class="flex flex-col">
    <global-navigation />
    <div class="flex flex-row flex-grow overflow-hidden items-stretch">
      <space-sidebar class="sidebar flex-none" :title="spaceTitle" :meta="spaceMeta" :actions="hasSidebarActions">
        <template #sidebarList>
          <slot name="spaceSidebarList" />
        </template>
        <template #sidebarActions>
          <slot name="spaceSidebarActions" />
        </template>
      </space-sidebar>
      <div class="z-10 flex relative w-full flex-col justify-between h-full">
        <main v-dragscroll:nochilddrag class=" flex flex-row gap-4 page-content pl-12 pt-9 pr-12 h-full w-full">
          <slot name="page-content" />
        </main>
        <div class="pb-9 mr-9 pl-12 justify-self-end">
          <space-navigation>
            <template #spaceNavigationButtons>
              <slot name="spaceNav" />
            </template>
          </space-navigation>
        </div>
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
</style>
