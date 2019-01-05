<template>
  <ParentLayout>
    <slot
      name="sidebar-top"
      slot="sidebar-top"
    />
    <slot
      name="sidebar-bottom"
      slot="sidebar-bottom"
    />
    <slot
      name="page-top"
      slot="page-top"
    />
    <slot
      name="page-bottom"
      slot="page-bottom"
    />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout,
  },
}
</script>
