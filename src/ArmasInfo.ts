export interface ArmaData {
    assetPath: string;
    category: string;
    defaultSkinUuid: string;
    displayIcon: string;
    displayName: string;
    killStreamIcon: string;
    uuid: string;
    shopData: ShopData;
    skin: SkinData;
    weaponStats: WeaponData;
}

interface ShopData {
    assetPath: string;
    canBeTrashed: boolean;
    category: string;
    categoryText: string;
    cost: number | null;
    gridPosition: {
        row: number;
        column: number;
    };
    image: null;
    newImage: string;
    newImage2: null;
}

interface SkinData {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string | null;
    wallpaper: string | null;
    assetPath: string;
    chromas: {
        uuid: string;
        displayName: string;
        displayIcon: string | null;
        fullRender: string | null;
        swatch: string | null;
        streamedVideo: string | null;
        assetPath: string;
    }[];
    levels: {
        uuid: string;
        displayName: string;
        levelItem: any;
        displayIcon: string | null;
        streamedVideo: string | null;
        assetPath: string;
    }[];
}

interface WeaponData {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: null;
    altFireType: string;
    adsStats: {
        zoomMultiplier: number;
        fireRate: number;
        runSpeedMultiplier: number;
        burstCount: number;
        firstBulletAccuracy: number;
    } | null;
    altShotgunStats: null;
    airBurstStats: null;
    damageRanges: {
        rangeStartMeters: number;
        rangeEndMeters: number;
        headDamage: number;
        bodyDamage: number;
        legDamage: number;
    }[];
}
