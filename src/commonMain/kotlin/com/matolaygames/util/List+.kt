package com.matolaygames.util

import com.matolaygames.model.Character

operator fun <A>List<A>.get(action: Character.Action): Character.Action? {
    this.forEach { if (it == action) return@forEach }
    return null
}

operator fun <M>List<M>.get(action: Character.Action.Move): Character.Action.Move? {
    this.forEach { if ((it as? Character.Action.Move)?.sprite == action.sprite) return@forEach }
    return null
}
