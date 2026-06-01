export const usePublication = () => {
    const config = useRuntimeConfig()

    const handleShare = async (pub: any) => {
        const { shareWithApi, copyToClipboard } = useShare()
        const url = `${window.location.origin}/publications/${pub.slug}`
        
        const shared = await shareWithApi({
            title: pub.title,
            text: pub.excerpt,
            url: url
        })

        if (!shared) {
            await copyToClipboard(url)
            pub.shared = true
            setTimeout(() => {
                pub.shared = false
            }, 2000)
        }
    }


    const handleLike = async (pub: any) => {
        try {
            await $fetch(`${config.public.apiBase}/posts/${pub.slug}/like`, {
                method: 'POST'
            })
        } catch (error) {
            console.error('Error liking post:', error)
            // Rollback on failure
        }
    }

    return {
        handleShare,
        handleLike
    }
}