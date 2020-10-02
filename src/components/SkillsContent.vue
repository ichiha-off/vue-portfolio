<template>

<div class="skills-content">

  <div class="skills-content-title eng">{{ SkillsContentTitle }}</div>
  <div v-html="SkillsContentBody" class="skills-content-body"></div>

  <div class="space">>>></div>

</div>

</template>

<script>

export default {
  name: 'SkillsContent',
  props: [
    'SkillsContentTitle',
    'SkillsContentBody'
  ]
}

</script>