package com.matolaygames.common

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.NativeSoundChannel
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.scene.Scene
import com.soywiz.korio.file.std.resourcesVfs

abstract class BaseScene() : Scene() {
    protected open val music: NativeSound? = null
    protected var shouldMusicChannelStop = false
    protected lateinit var channel: NativeSoundChannel
    private lateinit var sounds: List<NativeSound>
    private lateinit var musicSrcTemplates: List<String>

    override suspend fun sceneAfterInit() {
        super.sceneAfterInit()
        if (this::musicSrcTemplates.isInitialized && !this::sounds.isInitialized) {
            val tmp = mutableListOf<NativeSound>()
            if (tmp.isEmpty())
                musicSrcTemplates.forEach { tmp.add(resourcesVfs[it].readSound()) }
            sounds = tmp.toList()
            if (this::sounds.isInitialized) tmp.clear()
            println("BaseScene sceneAfterInit DONE")
        }
    }

    override suspend fun sceneBeforeLeaving() {
        super.sceneBeforeLeaving()
        if (shouldMusicChannelStop || this::channel.isInitialized) channel.stop()
    }
}
