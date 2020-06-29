package com.matolaygames.mylittleday.scene

import com.matolaygames.common.BaseScene
import com.soywiz.korge.input.onClick
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.position
import com.soywiz.korim.color.Colors

class MenuScene : BaseScene() {
    override suspend fun Container.sceneInit() {

        textButton(256.0, 32.0, Colors.BLACK.hexString) {
            text = "RESTART"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2 - 192)
            onClick {
//                @Suppress("DeferredResultUnused")
//                sceneContainer.changeToAsync<IntroScene>()
                text = "ERR :("
            }
        }

        textButton(256.0, 32.0, Colors.BLACK.hexString) {
            text = "EXIT"
            position(views.actualVirtualWidth / 2 - 128, views.actualVirtualHeight / 2 - 64)
            onClick {
                shouldMusicChannelStop = true
                views.gameWindow.close()
            }
        }
    }
}
