package com.matolaygames.common

import com.soywiz.korge.scene.*

sealed class GameState() {
    class Running(scene: Scene? = null) : GameState()
    object Paused : GameState()
}