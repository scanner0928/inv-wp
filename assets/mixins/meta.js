export default {
    asyncData(context) {
        return {
            baseName: context.env.baseName,
            baseDesc: context.env.baseDesc,
            baseUrl: context.env.baseUrl,
            baseOgp: context.env.baseOgp,
        }
    },
    head() {
        const head = { meta: [] }
        if (this.post.title) {
            head.title = this.post.title.rendered;
            head.meta.push({ hid: 'og:title', property: 'og:title', content: this.post.title.rendered })
        }
        if (this.post.excerpt) {
            head.meta.push({ hid: 'description', name: 'description', content: this.post.excerpt.rendered })
            head.meta.push({ hid: 'og:description', property: 'og:description', content: this.post.excerpt.rendered })
        } else if (!this.post.excerpt && this.post.title) {
            const disc = `${this.baseName}サイトの${this.meta.title}ページです。${this.baseDesc}`
            head.meta.push({ hid: 'description', name: 'description', content: disc })
            head.meta.push({ hid: 'og:description', property: 'og:description', content: disc })
        }

        // ページタイプ
        if (this.post.type) {
            head.meta.push({ hid: 'og:type', property: 'og:type', content: this.post.type })
        } else if (this.$route.path === '/') {
            head.meta.push({ hid: 'og:type', property: 'og:type', content: 'website' })
        }

        // ページURL
        const url = `${this.baseUrl}${this.$router.history.base}${this.$route.path}`
        head.meta.push({ hid: 'og:url', property: 'og:url', content: url })

        // OGP画像URL
        if (this.post.image) {
            const imageUrl = `${this.baseUrl}${this.$router.history.base}${this.baseOgp}${this.post.image}`
            head.meta.push({ hid: 'og:image', property: 'og:image', content: imageUrl })
        }

        return head

    }
}