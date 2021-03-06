# -*- coding: utf-8 -*-


from mydm.spider import register_meta_classes
from mydm.exceptions import SpiderFactoryException


__all__ = ['SpiderFactory']


class SpiderFactory:

    META_CLASSES = {}

    def __init_subclass__(cls, spider_type, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.META_CLASSES[spider_type] = cls

    @classmethod
    def create_spider(cls, setting):
        if 'name' not in setting or 'type' not in setting:
            raise SpiderFactoryException(
                    'miss attribute[name|type]'
            )
        try:
            metacls = cls.META_CLASSES[setting['type']]
        except KeyError:
            raise SpiderFactoryException(
                    f'unknown spider type[{setting["type"]}]'
            )
        try:
            return metacls(
                    f'{setting["name"].capitalize()}Spider',
                    (),
                    setting
            )
        except AttributeError as e:
            raise SpiderFactoryException(f'build spider failed[{e}]')


register_meta_classes()
