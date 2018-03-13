# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals


class KatoException(Exception):
    status = 500


class KatoTimeoutException(KatoException):
    pass


class KatoSecurityException(KatoException):
    pass


class MetricPermException(KatoException):
    pass


class NoDataException(KatoException):
    status = 400


class KatoTemplateException(KatoException):
    pass
