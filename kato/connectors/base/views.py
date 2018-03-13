# -*- coding: utf-8 -*-
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

from flask import Markup

from kato.exceptions import KatoException
from kato.views.base import KatoModelView


class DatasourceModelView(KatoModelView):
    def pre_delete(self, obj):
        if obj.slices:
            raise KatoException(Markup(
                'Cannot delete a datasource that has slices attached to it.'
                "Here's the list of associated charts: " +
                ''.join([o.slice_link for o in obj.slices])))
