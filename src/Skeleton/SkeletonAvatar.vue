<template>
  <div
    class="fx-skeleton-avatar"
    :class="[shapeClassName, { animated: useAnimation }]"
  ></div>
</template>

<script>
import { inArray } from '../helpers/util'
import { AVATAR_SHAPE_NAMES } from './util'

export default {
  name: 'fx-skeleton-avatar',
  inject: {
    skeletonSubOptions: {
      default: null
    }
  },
  props: {
    // 是否显示动画
    animated: {
      type: Boolean,
      default: false
    },
    // 指定头像的形状
    shape: {
      validator(val) {
        return inArray(val, AVATAR_SHAPE_NAMES)
      },
      default: null
    }
  },
  computed: {
    shapeClassName() {
      let shape

      if (this.shape == null) {
        if (this.skeletonSubOptions && this.skeletonSubOptions.avatarShape) {
          shape = this.skeletonSubOptions.avatarShape
        }
      } else {
        shape = this.shape
      }

      return (
        'shape--' +
        (inArray(shape, AVATAR_SHAPE_NAMES) ? shape : AVATAR_SHAPE_NAMES[0])
      )
    },
    useAnimation() {
      if (this.skeletonSubOptions) {
        return this.skeletonSubOptions.animated
      }
      return this.animated
    }
  }
}
</script>
