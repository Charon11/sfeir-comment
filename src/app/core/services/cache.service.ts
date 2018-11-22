import {Injectable} from '@angular/core'
import {isPlatformBrowser} from "@angular/common";

@Injectable()
export class CacheService {
    constructor() {}

    async clearSWCache() {
            const keys = await window.caches.keys();
            const appCaches = await Promise.all(
                keys
                    .filter(
                        k =>
                            k.match(/.*api-freshness*./) ||
                            k.match(/.*api-performance*./)
                    )
                    .map(k => caches.open(k))
            );

            await Promise.all(
                appCaches.map(c =>
                    c.keys().then(
                        cachedReqs => cachedReqs.map(req => c.delete(req))
                    )
                ));
    }
} 
